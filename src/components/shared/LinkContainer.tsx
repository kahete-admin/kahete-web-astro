import { ArrowUpRight } from "lucide-react";


// TODO: move this to types
export interface Link {
    thumbnail?: string;
    link: string;
    title: string;
    description?: string;

}

// TODO: add fallback image

export const LinkContainer = ({ thumbnail, link, title, description }: Link) => {
    return (
        <div className="border-[0.5px] border-white rounded-xl p-3 mb-4 cursor-pointer">
            <div className="flex justify-between items-center align-middle">
                <div className="flex flex-col items-start justify-center">
                    <h2 className="text-base text-white font-semibold capitalize line-clamp-1 mb-0">{title}</h2>
                    {
                        description &&
                        <h4 className="subtitle line-clamp-2 mt-1">{description}</h4>
                    }
                </div>
                <ArrowUpRight className="text-white min-w-6 min-h-6 max-w-6 max-h-6 ml-6 pr-2" />
            </div>
            {
                thumbnail &&
                <div className="mt-2 flex justify-center items-center">
                    <a href={link} target="_blank" rel="noreferrer">
                        <img src={thumbnail} alt="LinkImage" style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '50dvh' }} />
                    </a>
                </div>
            }
        </div>
    );
};