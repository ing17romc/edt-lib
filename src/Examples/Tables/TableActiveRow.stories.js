import React from 'react'
import { TableActiveRow as Table } from '.'
import { DATA_TABLE } from '../data'

export default {
	title: 'Examples/Tables',
	component: Table
}

const Template = (args) => <Table {...args} />

export const TableActiveRow = Template.bind({})

TableActiveRow.args = {
	dataTable: DATA_TABLE
}
