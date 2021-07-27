/**
 *@ github： https://github.com/YouAge
 *@ 文件简介：
 */

import { TableStateFilters, TableState } from 'ant-design-vue/lib/table/interface'
import { computed, ref } from 'vue'

interface DataItem {
  key: string
  name: string
  age: number
  address: string
}
type Pagination = TableState['pagination']
const data: DataItem[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]
export function useColumns() {
  const filteredInfo = ref()
  const sortedInfo = ref()

  const columns = computed(() => {
    const filtered = filteredInfo.value || {}
    const sorted = sortedInfo.value || {}
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' }
        ],
        filteredValue: filtered.name || null,
        onFilter: (value: string, record: DataItem) => record.name.includes(value),
        sorter: (a: DataItem, b: DataItem) => a.name.length - b.name.length,
        sortOrder: sorted.columnKey === 'name' && sorted.order,
        ellipsis: true
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a: DataItem, b: DataItem) => a.age - b.age,
        sortOrder: sorted.columnKey === 'age' && sorted.order
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' }
        ],
        filteredValue: filtered.address || null,
        onFilter: (value: string, record: DataItem) => record.address.includes(value),
        sorter: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
        sortOrder: sorted.columnKey === 'address' && sorted.order,
        ellipsis: true
      }
    ]
  })
  const handleChange = (pagination: Pagination, filters: TableStateFilters, sorter: any) => {
    console.log('Various parameters', pagination, filters, sorter)
    filteredInfo.value = filters
    sortedInfo.value = sorter
  }
  const clearFilters = () => {
    filteredInfo.value = null
  }
  const clearAll = () => {
    filteredInfo.value = null
    sortedInfo.value = null
  }
  const setAgeSort = () => {
    sortedInfo.value = {
      order: 'descend',
      columnKey: 'age'
    }
  }
  return {
    columns,
    handleChange,
    clearFilters,
    clearAll,
    setAgeSort,
    data
  }
}
