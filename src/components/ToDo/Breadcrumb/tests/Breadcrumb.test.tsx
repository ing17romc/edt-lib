import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumb from '../index'
import {
  defaultBreadcrumbProps,
  customSeparatorProps,
  singleItemProps,
  twoItemsProps,
} from './mocks'

describe('Breadcrumb', () => {
  describe('renderizado básico', () => {
    it('renderiza el nav con aria-label', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.getByRole('navigation', { name: 'breadcrumb' })).toBeInTheDocument()
    })

    it('renderiza todos los elementos', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.getByText('Inicio')).toBeInTheDocument()
      expect(screen.getByText('Productos')).toBeInTheDocument()
      expect(screen.getByText('Detalle')).toBeInTheDocument()
    })

    it('el último elemento tiene aria-current="page"', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.getByText('Detalle')).toHaveAttribute('aria-current', 'page')
    })

    it('los elementos con href son links', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')
      expect(screen.getByRole('link', { name: 'Productos' })).toHaveAttribute('href', '/productos')
    })

    it('el último elemento no es un link', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.queryByRole('link', { name: 'Detalle' })).not.toBeInTheDocument()
    })
  })

  describe('separadores', () => {
    it('muestra el separador por defecto ("/")', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      const separators = screen.getAllByText('/')
      expect(separators).toHaveLength(2)
    })

    it('muestra el separador personalizado', () => {
      render(<Breadcrumb {...customSeparatorProps} />)
      const separators = screen.getAllByText('>')
      expect(separators).toHaveLength(2)
    })

    it('no muestra separador en un solo elemento', () => {
      render(<Breadcrumb {...singleItemProps} />)
      expect(screen.queryByText('/')).not.toBeInTheDocument()
    })
  })

  describe('casos especiales', () => {
    it('renderiza un solo elemento sin links', () => {
      render(<Breadcrumb {...singleItemProps} />)
      expect(screen.getByText('Inicio')).toBeInTheDocument()
      expect(screen.queryAllByRole('link')).toHaveLength(0)
    })

    it('renderiza dos elementos correctamente', () => {
      render(<Breadcrumb {...twoItemsProps} />)
      expect(screen.getByRole('link', { name: 'Inicio' })).toBeInTheDocument()
      expect(screen.getByText('Actual')).toHaveAttribute('aria-current', 'page')
    })
  })
})
