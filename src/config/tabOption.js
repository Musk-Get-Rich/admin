import i18n from "@/i18n/index.js";
const t = i18n.global.t

export const globalOption = {
  searchBtnText: t('查询'),
  emptyBtnText: t('重置'),
  // maxHeight: window.innerHeight - 380,
  searchMenuPosition: "left",
  gridBtn: false,
  menuTitle: t('操作'),
  emptyText: t('暂无数据'),
  menuWidth: 220,
  stripe: true, // 斑马线表格样式
  editBtn: false, // 表格列编辑按钮
  delBtn: false, // 表格列删除按钮
  border: true,
  addBtn: false,
  searchLabelWidth: 10,
  align: "center",
  searchSpan: 6,
  searchShowBtn: false
}
