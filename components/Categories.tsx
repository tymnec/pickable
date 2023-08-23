"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { categoryFilters} from "@/constants";

const Categories = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const category = searchParams.get("category");

    const handleTags = (item: string) => {
        router.push(`${pathName}?category=${item}`);
    };

    return (
        <div className="flexBetween w-full gap-5 flex-wrap">
            <ul className="flex gap-2 overflow-auto">
                {categoryFilters.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => handleTags(filter)}
                        className={`${
                            category === filter
                                ? "bg-light-white-300 font-medium"
                                : "font-normal hover:bg-light-white-300"
                        } px-4 py-3 rounded-3xl capitalize whitespace-nowrap transition duration-500 ease-in-out`}
                    >
                        {filter}
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
