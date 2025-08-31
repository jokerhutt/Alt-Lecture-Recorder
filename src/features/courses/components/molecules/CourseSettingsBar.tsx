import { HeroIcon } from "../../../../components/atoms/HeroIcon";
import { Selection } from "../../../../components/atoms/Selection";

export function CourseSettingsBar () {
    return (
            <div className="flex items-center gap-2 ">
              <div className="">
                <HeroIcon iconName="ChevronLeftIcon" />
              </div>
              <Selection options={["Page 1"]} />
              <div className="">
                <HeroIcon iconName="ChevronRightIcon" />
              </div>
            </div>
    )
}