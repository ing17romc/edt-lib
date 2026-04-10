import React, { ElementType } from 'react';
import styles from './Typography.module.scss';
import type { TypographyProps } from './types';

/**
 * Typography
 *
 * This component displays examples of typographic styles (headings and paragraphs) for the EDT library.
 * Useful for visualizing and validating the appearance of styles defined in the library.
 *
 * @param props - Typography component props (currently accepts none, reserved for future extensions).
 * @returns A block of React Elements that displays examples of headings and paragraphs with different styles.
 */

const Typography: React.FC<TypographyProps> = (props = {}) => {
  // Sample text for paragraphs
  const sampleText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

  // Generates a heading with its example tag
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

  // Generates a paragraph with its example tag
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

  // Generates a paragraph with different line heights
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

  // Destructure props with default values
  const { 
    showCodeExamples = true, 
    className = '' 
  } = props || {};
  
  // Combine CSS classes
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
      
      {/* Render headings h1-h6 */}
      {[1, 2, 3, 4, 5, 6].map(renderHeading)}
      
      <h1 className={styles.title}>Paragraphs</h1>
      <hr className={styles.divider} />
      
      {/* Render paragraphs with different sizes */}
      {['22', '20', '18', '16', '14', '12', '10', '8'].map((size) => 
        renderParagraph(size, size === '22' ? sampleText : '')
      )}
      
      {/* Bold paragraph */}
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
      
      {/* Line height examples */}
      {['simple', 'doble', 'triple'].map(renderLineHeightExample)}
    </div>
  );
};

export default Typography;