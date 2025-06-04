// ContributionGrid.tsx
import React, { useEffect, useState } from 'react';

interface ContributionDay {
    date: string;
    color: string;
    contributionCount: number;
    contributionLevel: string;
}

type Week = ContributionDay[];

export default function ContributionGrid() {
    const [data, setData] = useState<Week[]>([]);

    useEffect(() => {
        fetch('https://github-contributions-api.deno.dev/AristotelesAlves.json?scheme=black')
            .then(res => res.json())
            .then(json => setData(json.contributions));
    }, []);

    return (
        <div className="relative overflow-x-auto">
            <div
                className="grid grid-flow-col gap-[4px] min-w-[700px]" // <- largura mínima para forçar scroll
            >
                {data.map((week, x) => (
                    <div key={x} className="flex flex-col gap-[4px]">
                        {week.map((day) => (
                            <div
                                key={day.date}
                                className="rounded-sm cursor-pointer aspect-square w-3 h-3 md:w-5 md:h-5"
                                style={{
                                    backgroundColor: day.contributionCount === 0 ? '#303030' : day.color,
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
