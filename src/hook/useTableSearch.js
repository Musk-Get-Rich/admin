import dayjs from "dayjs";

export const useTableSearch = () => {
  /**
   * @param params 表单数据
   * @param refreshFn 刷新表格函数
   * @param done avue 搜索触发函数
   */
  const search = async (params, refreshFn, done) => {
    if (params.createdAt) {
      params.startDate = params.createdAt[0]
      params.endDate = params.createdAt[1]
      delete params.createdAt
    }

    if (params.createDate) {
      params.startDate = params.createDate[0]
      params.endDate = params.createDate[1]
      delete params.createdAt
    }

    if (params.userRegtime) {
      params.userRegStartTime = dayjs(params.userRegtime[0]).format('YYYY-MM-DD HH:mm:ss')
      params.userRegEndTime = dayjs(params.userRegtime[1]).format('YYYY-MM-DD HH:mm:ss')
      delete params.userRegtime
    }

    await refreshFn(params)
    done && done()
  }

  /**
   * @param refreshFn 刷新表格函数
   * @param params 表单数据如果需要
   */
  const reset = async (refreshFn, params = {}) => {
    await refreshFn(params)
  }

  return {
    search,
    reset
  }
}
