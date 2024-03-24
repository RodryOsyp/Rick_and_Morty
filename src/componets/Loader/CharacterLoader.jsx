import ContentLoader from "react-content-loader"

const CharacterLoader = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={450}
    viewBox="0 0 300 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="30" y="83" rx="0" ry="0" width="2" height="2" /> 
    <rect x="12" y="-2" rx="22" ry="22" width="280" height="430" />
  </ContentLoader>
)

export default CharacterLoader