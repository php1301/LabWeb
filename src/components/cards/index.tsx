import React from "react";

import { Button } from "@components";

export const Cards: React.FC = () => {
    return (
        <div className="flex-1 container my-8 max-w-screen-lg mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    key="Lab 1"
                    className="col-span-1 rounded-md border border-gray-300 p-5"
                >
                    <h2 className="text-xl font-semibold mb-2">Lab 1</h2>
                    <Button type="button">
                        <a href="/lab1" target="_blank">
                            Lab 1
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};
