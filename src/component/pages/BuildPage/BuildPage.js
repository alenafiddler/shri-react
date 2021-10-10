import '../BuildPage/BuildPage.scss';
import BuildItem from "./BuildItem";
import testDataBuild from "./testDataBuild";
export const BuildPage = () => {
  return(
    <>
      { testDataBuild.map((build,idx) => <BuildItem key={`build-${idx}`} props = {build}  /> )}
      <div className="b-btn">

        <button className="btn btn-default btn-tight">
          Show more
        </button>
      </div>
    </>
  )
}
export default BuildPage
