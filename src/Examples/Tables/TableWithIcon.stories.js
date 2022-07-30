import React from 'react'
import { TableWithIcon as Table } from '.'
import { DATA_TABLE } from '../data'

export default {
	title: 'Examples/Tables',
	component: Table
}

const Template = (args) => <Table {...args} />

export const TableWithIcon = Template.bind({})

TableWithIcon.args = {
	dataTable: DATA_TABLE
}
