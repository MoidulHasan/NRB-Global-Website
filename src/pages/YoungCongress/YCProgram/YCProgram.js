import './YCProgram.css'
import YCProgramSlide from '../../../component/YoungCongress/YCProgram/YCProgramSlide'
import YCProgramCard from '../../../component/YoungCongress/YCProgram/YCProgramCard'
function YCProgram() {
    return (
        <div className='ycprogram'>
            <YCProgramSlide />
            <YCProgramCard />
        </div>
    )
}

export default YCProgram