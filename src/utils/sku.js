// sku全排算法
export const generateSKUs = (attributes) => {
  let results = [];

  function helper(current, index) {
    if (index === attributes.length) {
      // Construct the skuName by concatenating all attribute values
      let skuNameParts = [];
      let propertiesParts = [];
      for (let attribute of attributes) {
        let title = attribute.tagName.title;
        if (current[title]) {
          skuNameParts.push(current[title]);
          propertiesParts.push(`${title}:${current[title]}`);
        }
      }
      current.skuName = skuNameParts.join(' ');
      current.properties = propertiesParts.join(';');
      results.push(current);
      return;
    }

    let tagItems = attributes[index].tagItems;
    let tagName = attributes[index].tagName.title;
    for (let item of tagItems) {
      let newCurrent = {...current, [tagName]: item.propValue};
      helper(newCurrent, index + 1);
    }
  }

  helper({}, 0);
  return results;
}

// 商品描述转成skuTags
export const generateSkuTags = (arr) => {
  const skuTags = [];
  const tagMap = {};

  arr.forEach(item => {
    if (item.properties) {
      const properties = item.properties.split(';');

      properties.forEach(prop => {
        const [key, value] = prop.split(':').map(s => s.trim());
        if (!tagMap[key]) {
          tagMap[key] = {
            tagName: {
              title: key,
              val: item.skuId
            },
            tagItems: []
          };
        }
        const existingTagItem = tagMap[key].tagItems.find(tagItem => tagItem.propValue === value);
        if (!existingTagItem) {
          tagMap[key].tagItems.push({
            propId: item.skuId,
            propValue: value,
            valueId: generateUniqueId()
          });
        }
      });
    }
  });

  for (const key in tagMap) {
    if (tagMap.hasOwnProperty(key)) {
      skuTags.push(tagMap[key]);
    }
  }

  return skuTags;
}

/**
 * 描述转成对象
 * from -> const str = '颜色:心水金;尺寸:3.6 寸'
 *
 * to -> const obj = {
 *   '颜色': '心水金',
 *   '尺寸': '3.6 寸'
 * }
 */
export const parseProperties = (str) => {
  const result = {};
  const properties = str.split(';');

  properties.forEach(prop => {
    const [key, value] = prop.split(':').map(s => s.trim());
    result[key] = value;
  });

  return result;
}

// 获取不重复的id
export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
}
