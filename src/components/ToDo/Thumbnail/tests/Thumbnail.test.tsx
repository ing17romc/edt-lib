import React from 'react'
import { render, screen } from '@testing-library/react'
import Thumbnail from '../index'
import {
  defaultThumbnailProps,
  withCaptionProps,
  roundedThumbnailProps,
  largeThumbnailProps,
} from './mocks'

describe('Thumbnail', () => {
  describe('renderizado básico', () => {
    it('renderiza la imagen', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('tiene el alt correcto', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      expect(screen.getByAltText('Imagen de ejemplo')).toBeInTheDocument()
    })

    it('aplica el ancho y alto por defecto (120)', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('width', '120')
      expect(img).toHaveAttribute('height', '120')
    })
  })

  describe('caption', () => {
    it('muestra el caption cuando está definido', () => {
      render(<Thumbnail {...withCaptionProps} />)
      expect(screen.getByText('Descripción de la imagen')).toBeInTheDocument()
    })

    it('no muestra caption cuando no está definido', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      expect(screen.queryByRole('group')).not.toBeInTheDocument()
    })
  })

  describe('variantes visuales', () => {
    it('aplica clase redondeada cuando rounded=true', () => {
      render(<Thumbnail {...roundedThumbnailProps} />)
      expect(screen.getByRole('img')).toHaveClass('image--rounded')
    })

    it('no aplica clase redondeada por defecto', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      expect(screen.getByRole('img')).not.toHaveClass('image--rounded')
    })
  })

  describe('tamaño personalizado', () => {
    it('aplica el ancho y alto especificados', () => {
      render(<Thumbnail {...largeThumbnailProps} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('width', '240')
      expect(img).toHaveAttribute('height', '160')
    })
  })
})
