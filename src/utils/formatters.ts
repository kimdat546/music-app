export const formatDuration = (time: number) => {
    if (isNaN(time)) {
        return "00:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const padNumber = (number: number) => String(number).padStart(2, "0");

    return padNumber(minutes) + ":" + padNumber(seconds);
};
