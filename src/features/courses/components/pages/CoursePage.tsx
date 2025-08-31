import { HeroIcon } from "../../../../components/atoms/HeroIcon";
import { Selection } from "../../../../components/atoms/Selection";
import { RecordingSelection } from "../../../recordings/components/molecules/RecordingsSelection";

export function CoursePage() {
  return (
    <div>
      <div className="border-b p-8 flex flex-col">
        <div className="flex gap-3 flex-col lg:flex-row">
          <img
            className="object-cover h-44 lg:h-72"
            src="https://www.edx.org/_next/image?url=https%3A%2F%2Fprod-discovery.edx-cdn.org%2Fcdn-cgi%2Fimage%2Fwidth%3Dauto%2Cheight%3Dauto%2Cquality%3D75%2Cformat%3Dwebp%2Fmedia%2Fprograms%2Fcard_images%2Faaa20519-a8b3-426a-9aa1-d0c633300e1e-67128005d690.jpg&w=640&q=75"
          />
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Politics</h2>
            <p className="text-xl">Owner: David Glogowski</p>
            <div className="flex gap-4 justify-between lg:justify-start">
                <div className="border text-lg py-1 px-4">
                    <p>View</p>
                </div>
                <div className="border text-lg py-1 px-4">
                    <p>Edit</p>
                </div>
                <div className="border text-lg py-1 px-4">
                    <p>Security</p>
                </div>
                <div className="border text-lg py-1 px-4">
                    <p>Info</p>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-2 flex flex-col lg:flex-row items-end justify-between">
            <div className="w-full lg:block hidden">
                <div className="flex items-center gap-2 ">
                    <div className="">
                        <HeroIcon iconName="ChevronLeftIcon"/>
                    </div>
                    <Selection options={["Page 1"]}/>
                    <div className="">
                        <HeroIcon iconName="ChevronRightIcon"/>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center">
                <RecordingSelection/>
            </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
