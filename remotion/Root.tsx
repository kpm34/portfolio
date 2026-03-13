import { Composition, Folder } from "remotion";
import { CFBDemo } from "./compositions/CFBDemo";
import { ThirdEyeDemo } from "./compositions/ThirdEyeDemo";
import { BisectDemo } from "./compositions/BisectDemo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Project-Demos">
        <Composition
          id="CFBDemo"
          component={CFBDemo}
          durationInFrames={45 * 30} // 45 seconds at 30fps
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{}}
        />
        <Composition
          id="ThirdEyeDemo"
          component={ThirdEyeDemo}
          durationInFrames={40 * 30} // 40 seconds at 30fps
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{}}
        />
        <Composition
          id="BisectDemo"
          component={BisectDemo}
          durationInFrames={45 * 30} // 45 seconds at 30fps
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{}}
        />
      </Folder>
    </>
  );
};
