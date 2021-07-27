import { TableColumn } from 'types/tableColumn'

/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

// interface TableColumn {
//   key: string
//   name: string
//   age: number
//   address: string
// }

export const columns = [
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
