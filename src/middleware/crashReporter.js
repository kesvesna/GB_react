export const crashReporter = (store) => (next) => (action) => {
    try {
        return next(action);
    } catch (e) {
        console.error("error report: ", action);
    }
}