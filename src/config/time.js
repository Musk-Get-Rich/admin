// 返回今天的时间
import dayjs from "dayjs";

export default {
  startDate: dayjs().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
  endDate: dayjs().endOf('day').format('YYYY-MM-DD HH:mm:ss')
}
