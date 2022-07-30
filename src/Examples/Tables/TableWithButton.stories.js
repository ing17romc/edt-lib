import React from 'react'
import { TableWithButton as Table } from '.'
import { DATA_TABLE } from '../data'

export default {
	title: 'Examples/Tables',
	component: Table
}

const Template = (args) => <Table {...args} />

export const TableWithButton = Template.bind({})

TableWithButton.args = {
	dataTable: DATA_TABLE
}
