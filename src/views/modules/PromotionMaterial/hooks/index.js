export function useImageDownload() {  
    const loading = ref(false)  
    const error = ref(null)  
  
    const downloadImage = (src, options = {}) => {  
      const {  
        filename = '下载图片',  
        type = 'png',  
        quality = 1  
      } = options  
  
      return new Promise((resolve, reject) => {  
        loading.value = true  
        error.value = null  
  
        // 尝试多种下载方法  
        const downloadMethods = [  
          // 方法1：直接下载  
          () => directDownload(src, filename, type, quality),  
          
          // 方法2：代理下载  
          () => proxyDownload(src, filename, type, quality),  
          
          // 方法3：Fetch下载  
          () => fetchDownload(src, filename, type, quality)  
        ]  
  
        // 串行尝试下载方法  
        async function tryDownloadMethods(methods) {  
          for (const method of methods) {  
            try {  
              await method()  
              loading.value = false  
              resolve()  
              return  
            } catch (err) {  
              console.warn('下载方法失败', err)  
            }  
          }  
          
          // 所有方法都失败  
          loading.value = false  
          error.value = new Error('图片下载失败')  
          reject(error.value)  
        }  
  
        tryDownloadMethods(downloadMethods)  
      })  
    }  
  
    // 直接图片下载  
    function directDownload(src, filename, type, quality) {  
      return new Promise((resolve, reject) => {  
        const img = new Image()  
        img.crossOrigin = 'Anonymous'  
        
        img.onload = () => {  
          try {  
            const canvas = document.createElement('canvas')  
            canvas.width = img.naturalWidth  
            canvas.height = img.naturalHeight  
  
            const ctx = canvas.getContext('2d')  
            ctx.drawImage(img, 0, 0)  
  
            canvas.toBlob((blob) => {  
              if (blob) {  
                createDownloadLink(blob, filename, type)  
                resolve()  
              }  
            }, `image/${type}`, quality)  
          } catch (err) {  
            reject(err)  
          }  
        }  
  
        img.onerror = () => reject(new Error('直接下载失败'))  
        img.src = src  
      })  
    }  
  
    // 代理下载  
    function proxyDownload(src, filename, type, quality) {  
      const proxyUrl = `https://cors-anywhere.herokuapp.com/${src}`  
      return fetchDownload(proxyUrl, filename, type, quality)  
    }  
  
    // Fetch下载  
    function fetchDownload(src, filename, type, quality) {  
      return fetch(src, {   
        mode: 'cors',  
        credentials: 'include'  
      })  
      .then(response => {  
        if (!response.ok) throw new Error('Network response was not ok')  
        return response.blob()  
      })  
      .then(blob => {  
        createDownloadLink(blob, filename, type)  
      })  
    }  
  
    // 创建下载链接  
    function createDownloadLink(blob, filename, type) {  
      const link = document.createElement('a')  
      link.href = URL.createObjectURL(blob)  
      link.download = `${filename}.${type}`  
      link.click()  
      URL.revokeObjectURL(link.href)  
    }  
  
    return {  
      downloadImage,  
      loading,  
      error  
    }  
  }