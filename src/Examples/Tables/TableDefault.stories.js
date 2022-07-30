import React from 'react'
import { TableDefault as Table } from '.'
import { DATA_TABLE } from '../data'

export default {
	title: 'Examples/Tables',
	component: Table
}

const Template = (args) => <Table {...args} />

export const TableDefault = Template.bind({})

TableDefault.args = {
	dataTable: DATA_TABLE
}
