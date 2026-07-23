export function getBackground(icon){

    switch(icon){

        case "01d":
            return "from-sky-400 to-blue-600";

        case "01n":
            return "from-slate-900 to-indigo-950";

        case "02d":
        case "03d":
        case "04d":
            return "from-sky-500 to-slate-500";

        case "09d":
        case "10d":
            return "from-slate-500 to-slate-800";

        case "11d":
            return "from-gray-700 to-gray-950";

        default:
            return "from-sky-500 to-blue-700";
    }
}