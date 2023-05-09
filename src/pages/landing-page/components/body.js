import { Button } from '@mantine/core';
import { useNavigate} from 'react-router-dom';

const Body = () => {
    const navigate = useNavigate()
    return (
        <div className="grid justify-items-center content-center mt-24">
            <div className="flex flex-col justify-center items-center">
                <p className="font-medium text-xl">FLWHM Result</p>
                <Button 
                    className="italic animate-bounce mt-4" 
                    variant="outline" 
                    radius="md"
                    onClick={() => navigate("/upload-report")}
                >
                    Upload Here
                </Button>
                <span className="italic text-sm block">Upload the LRT test for wells and take a snippet....</span>
            </div>  
        </div>
    );
}

export default Body;