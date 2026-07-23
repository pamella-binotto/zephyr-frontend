export function formatHour(dateTime) {

    return new Date(dateTime).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
    });

}