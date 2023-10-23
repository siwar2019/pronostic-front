
import * as Muicon from "@material-ui/icons";

 const GenerateIcon = (variation: string) => {
    const IconName = Muicon[variation as keyof typeof Muicon];
    return <IconName fontSize="large" htmlColor="rgb(33, 146, 255)" />;
  };

export default GenerateIcon