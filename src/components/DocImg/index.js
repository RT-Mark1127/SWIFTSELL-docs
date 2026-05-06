import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function DocImg({ src, alt, style }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <img
      src={`${siteConfig.customFields.mediaBase}/${src}`}
      alt={alt}
      style={style}
    />
  );
}
