import React, { ElementType } from 'react';
import styles from './Typography.module.scss';
import type { TypographyProps } from './types';

/**
 * Typography
 *
 * Este componente muestra ejemplos de estilos tipográficos (headings y párrafos) para la librería EDT.
 * Útil para visualizar y validar la apariencia de los estilos definidos en la librería.
 *
 * @param props - Props del componente Typography (actualmente no recibe ninguna, reservado para futuras extensiones).
 * @returns Un bloque de React Elements que muestra ejemplos de headings y párrafos con diferentes estilos.
 */

const Typography: React.FC<TypographyProps> = (props = {}) => {
  // Texto de ejemplo para los párrafos
  const sampleText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

  // Genera un heading con su etiqueta de ejemplo
  const renderHeading = (level: number) => {
    const Tag = `h${level}` as ElementType;
    return (
      <div key={`heading-${level}`} className={styles.headingExample}>
        {React.createElement(Tag, {
          className: styles[`h${level}`],
          'data-testid': `heading-${level}`
        }, `<h${level}>Heading ${level}</h${level}>`)}
        <code className={styles.codeExample}>
          {`<h${level}>Heading ${level}</h${level}>`}
        </code>
        <hr className={styles.divider} />
      </div>
    );
  };

  // Genera un párrafo con su etiqueta de ejemplo
  const renderParagraph = (size: string, text = '') => (
    <div key={`paragraph-${size}`} className={styles.paragraphExample}>
      <p className={`${styles.paragraph} ${styles[`size-${size}`]}`}>
        {text || `This is a sample text with size ${size}px`}
      </p>
      <code className={styles.codeExample}>
        {`<p class="${styles.paragraph} ${styles[`size-${size}`]}">${text || `Text with size ${size}px`}</p>`}
      </code>
      <hr className={styles.divider} />
    </div>
  );

  // Genera un párrafo con diferentes interlineados
  const renderLineHeightExample = (type: string) => {
    const lineHeights = {
      simple: '1.5',
      doble: '2',
      triple: '3'
    };

    return (
      <div key={`line-height-${type}`} className={styles.lineHeightExample}>
        <p 
          className={`${styles.paragraph} ${styles['size-22']} ${styles[`line-height-${type}`]}`}
          style={{ '--line-height': lineHeights[type as keyof typeof lineHeights] } as React.CSSProperties}
        >
          {sampleText}
        </p>
        <code className={styles.codeExample}>
          {`<p class="${styles.paragraph} ${styles['size-22']} ${styles[`line-height-${type}`]}" style="--line-height: ${lineHeights[type as keyof typeof lineHeights]};">${sampleText}</p>`}
        </code>
        <hr className={styles.divider} />
      </div>
    );
  };

  // Desestructurar las props con valores por defecto
  const { 
    showCodeExamples = true, 
    className = '' 
  } = props || {};
  
  // Combinar clases CSS
  const containerClasses = [
    styles.typographyContainer,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={containerClasses}
      data-testid="typography-container"
    >
      <h1 className={styles.title}>Headings</h1>
      <hr className={styles.divider} />
      
      {/* Renderizar headings h1-h6 */}
      {[1, 2, 3, 4, 5, 6].map(renderHeading)}
      
      <h1 className={styles.title}>Paragraphs</h1>
      <hr className={styles.divider} />
      
      {/* Renderizar párrafos con diferentes tamaños */}
      {['22', '20', '18', '16', '14', '12', '10', '8'].map((size) => 
        renderParagraph(size, size === '22' ? sampleText : '')
      )}
      
      {/* Párrafo con negrita */}
      <div className={styles.paragraphExample}>
        <p className={`${styles.paragraph} ${styles['size-22']} ${styles.bold}`}>
          {sampleText}
        </p>
        {showCodeExamples && (
          <code className={styles.codeExample} data-testid="code-example">
            {`<p class="${styles.paragraph} ${styles['size-22']} ${styles.bold}">${sampleText}</p>`}
          </code>
        )}
        <hr className={styles.divider} />
      </div>
      
      <h2 className={styles.subtitle}>Line Height Examples</h2>
      <hr className={styles.divider} />
      
      {/* Ejemplos de interlineado */}
      {['simple', 'doble', 'triple'].map(renderLineHeightExample)}
    </div>
  );
};

export default Typography;