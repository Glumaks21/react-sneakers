import ContentLoader from 'react-content-loader';

const LoadingCard = (props) => (
  <ContentLoader
    speed={2}
    width={225}
    height={270}
    viewBox="0 0 225 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="30" y="30" rx="10" ry="10" width="125" height="110" />
    <rect x="30" y="170" rx="7" ry="7" width="100" height="20" />
    <rect x="30" y="200" rx="10" ry="10" width="66" height="40" />
    <rect x="30" y="155" rx="7" ry="7" width="125" height="10" />
    <rect x="120" y="210" rx="5" ry="5" width="30" height="30" />
  </ContentLoader>
);

export default LoadingCard;
