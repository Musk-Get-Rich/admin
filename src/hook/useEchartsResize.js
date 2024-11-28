import {useSessionStorage} from "@vueuse/core";
import {MENU_COLLAPSE, MENU_SIDEBAR_INDEX, NAV_TITLE} from "@/config/storageKey.js";
import {debounce} from "@/utils/index.js";

export const useEchartsResize = () => {

  const init = (chartInstance) => {
    /**
     * 折叠菜单
     */
    const collapse = useSessionStorage(MENU_COLLAPSE, false)

    // 重新设置宽度
    watch(() => collapse.value, (val) => {
      console.log(123);
      setTimeout(() => {
        chartInstance.resize();
      }, 500)
    }, {
      deep: true
    })


    window.addEventListener('resize', debounce(function () {
      chartInstance.resize();
    }, 100));
  }

  return {
    init
  }
}
