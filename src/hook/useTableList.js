import {computed, nextTick, ref} from "vue"
import {getObjType} from "@/utils"

export function useTableList(ajaxFn, params, key = 'rows', immediate = true) {
  const tableRef = ref() // 如要使用avue自带方法需绑定table的Ref
  const pageNum = ref(1)
  const pageSize = ref(10)
  const pageTotal = ref(0)
  const tableLoading = ref(true)
  const paramsRef = ref()
  const tableData = ref([])
  const originData = ref(null)

  // 数据请求
  const getTableData = async (arg) => {
    tableLoading.value = true
    if (arg) {
      pageNum.value = 1
      if (getObjType(arg) === "object") {
        // 保留上一次搜索参数，分页用
        paramsRef.value = arg
      }
    }

    const argObj = {
      pageNum: pageNum.value,
      pageSize: pageSize.value,
      ...params,
      ...paramsRef.value,
      ...arg
    }

    await ajaxFn(argObj)
      .then((res) => {
        originData.value = res

        tableData.value = Array.isArray(res) ? res : res[key];

        if(typeof res.total == 'number'){
          pageTotal.value = res.total
        }else if(typeof res.results == 'number'){
          pageTotal.value = res.results
        }else if(typeof res.rows == 'number'){
          pageTotal.value = res.rows
        }
        tableLoading.value = false
      })
      .catch(() => {
        tableLoading.value = false
      })
  }

  // 分页参数
  const pageObj = computed({
    get() {
      return {
        total: pageTotal.value || 0,
        currentPage: pageNum.value,
        pageSize: pageSize.value
      }
    },
    set() {
    }
  })

  // 分页显示条数切换
  const sizeChange = (size) => {
    pageSize.value = size

    getTableData(true)
  }

  // 页码切换
  const currentChange = (page) => {
    pageNum.value = page
    getTableData()
  }

  // 重置搜索
  const searchReset = () => {
    // avue 方法
    tableRef.value.searchReset()
  }

  // 默认请求数据
  nextTick(() => {
    if (immediate) {
      getTableData(true)
    }
  })

  return {
    tableRef,
    tableLoading,
    pageObj,
    tableData,
    originData,
    sizeChange,
    currentChange,
    searchReset,
    getTableData,
  }
}
