
import { Fragment, useState } from "react";
import { buildFeedbackpath, extractFeedback } from "../api/feedback/index";

function FeedbackPage(props) {
    const [feedbackData , setFeedbackData ] = useState();
    function loadFeedbackHandler(id){
        fetch(`/api/feedback/${id}`).then(response => response.json()).then(data=> {
            setFeedbackData(data.feedback)
        }) //api/some-feedback-id
    }
	return (
        <Fragment>
            {feedbackData && <p>{feedbackData.email}</p> }
            <ul>
			{props.feedbackItems.map((item) => (
				<li key={item.id}>{item.text} <button onClick={loadFeedbackHandler.bind(null,item.id)}>Show Details</button> </li>
			))}
		</ul>

        </Fragment>
		
	);
}
export async function getStaticProps() {
	const filePath = buildFeedbackpath();
	const data = extractFeedback(filePath);
	return {
		props: {
			feedbackItems: data,
		},
	};
}

export default FeedbackPage;
