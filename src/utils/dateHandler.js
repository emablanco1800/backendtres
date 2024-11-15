export const formatDate= (date) => {

    const dateString = date instanceof Date ? date.toISOString() : date;

    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    if (isoDateRegex.test(dateString)) {
        const formatedDate = date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
        return formatedDate
    } else {
        return date
    };
};