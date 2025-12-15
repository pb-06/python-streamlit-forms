/** POST /api/lies */

export default async function handler(req, res) {
    const method = req.method;
    if (method == 'POST') {
        const body = req.body;
        // process form data
        console.log('body', body);
        return res.sendStatus(201).json({ok: true});
    } else {
        return res.sendStatus(405).json({ok: false});
    }
}