export default (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    if (req.xhr || req.headers.accept.includes('application/json')) {
        res.status(statusCode).json({ error: message });
    } else {
        res.status(statusCode).render('error', { message });
    }
};
