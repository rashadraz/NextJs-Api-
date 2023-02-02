import { buildFeedbackpath, extractFeedback } from ".";

function handler(req, res) {
    if(req.method === 'delete') {
        //delete
    }
	const feedbackId = req.query.feedbackId;
	const filePath = buildFeedbackpath();
	const feedbackData = extractFeedback(filePath);
	const selectedFeedback = feedbackData.find(
		(feedback) => feedback.id === feedbackId
	);
    res.status(200).json({feedback:selectedFeedback });
}

export default handler;
