import React from "react";

export default function Contact() {
	return (
		<div className="contact row no-gutters align-items-center">
			<div className="row no-gutters d-flex justify-content-around align-items-center col-xl col-sm-12">
				<div className="socButton col-xl-6 col-sm-12 p-5">
					<a
						href="https://www.linkedin.com/in/liammorgan97/"
						className="socLink row no-gutters">
						<div className="buttonLinkedInLeft col-3">
							<i className="fab fa-linkedin"></i>
						</div>
						<div className="buttonLinkedInRight col-9 text-center">
							<span>LinkedIn</span>
						</div>
					</a>
				</div>

				<div className="socButton col-xl-6 col-sm-12 p-5">
					<a
						href="https://github.com/LiamMorgan/"
						className="socLink row no-gutters">
						<div className="buttonGitHubLeft col-3">
							<i className="fab fa-github"></i>
						</div>
						<div className="buttonGitHubRight col-9 text-center">
							<span>GitHub</span>
						</div>
					</a>
				</div>

				<div className="socButton col-xl-6 col-sm-12 p-5">
					<a
						href="https://twitter.com/Liam__Morgan/"
						className="socLink row no-gutters">
						<div className="buttonTwitterLeft col-3">
							<i className="fab fa-twitter"></i>
						</div>
						<div className="buttonTwitterRight col-9 text-center">
							<span>Twitter</span>
						</div>
					</a>
				</div>

				<div className="socButton col-xl-6 col-sm-12 p-5">
					<a
						href="https://www.paypal.com/paypalme/liamjohnmorgan/"
						className="socLink row no-gutters">
						<div className="buttonPayPalLeft col-3">
							<i className="fab fa-paypal"></i>
						</div>
						<div className="buttonPayPalRight col-9 text-center">
							<span>PayPal.Me</span>
						</div>
					</a>
				</div>
			</div>
			<div className="col-xl-4 col-sm-12 p-5">
				<h3>Email me</h3>
				<form
					action="mailto:mayzrdev@gmail.com"
					method="GET"
					encType="text/plain">
					<div class="form-row">
						<div class="form-group col-md-6">
							<input
								name="senderName"
								type="text"
								class="form-control"
								id="inputName"
								placeholder="Name"
							/>
						</div>
						<div class="form-group col-md-6">
							<input
								name="senderEmail"
								type="email"
								class="form-control"
								id="inputEmail"
								placeholder="Email"
							/>
						</div>
					</div>
					<div class="form-group">
						<input
							name="subject"
							type="text"
							class="form-control"
							id="inputSubject"
							placeholder="Subject"
						/>
					</div>
					<div class="form-group">
						<textarea
							name="body"
							type="text"
							class="form-control"
							id="emailBody"
							placeholder="Write your email here..."
						/>
					</div>
					<button type="submit" class="btn btn-outline">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
