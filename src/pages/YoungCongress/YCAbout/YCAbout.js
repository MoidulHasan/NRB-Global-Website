import './YCAbout.css';
import YCAboutSection from '../../../component/YoungCongress/YCAbout/YCAboutSection';
import YCMisssion from '../../../component/YoungCongress/YCAbout/YCMisssion';
import YCVision from '../../../component/YoungCongress/YCAbout/YCVision';
import YCObjective from '../../../component/YoungCongress/YCAbout/YCObjective';
import YCATeam from '../../../component/YoungCongress/YCAbout/YCATeam';
import YCPhotoContestComponent from '../../../component/YoungCongress/YCAbout/YCPhotoContestComponent';
function YCAbout() {
  return (
    <div className='yca-container p-container'>
      <YCAboutSection />
      <YCMisssion />
      {/* <YCVision /> */}
      <YCObjective />
      {/* <YCATeam /> */}
      <YCPhotoContestComponent />
    </div>
  );
}

export default YCAbout;
