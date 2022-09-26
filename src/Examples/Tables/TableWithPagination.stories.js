import React from 'react'
import { TableWithPagination as Table } from '.'
import { DATA_TABLE } from '../data'

export default {
	title: 'Examples/Tables',
	component: Table
}

const Template = (args) => <Table {...args} />

export const TableWithPagination = Template.bind({})

TableWithPagination.args = {
	dataTable: DATA_TABLE
}
