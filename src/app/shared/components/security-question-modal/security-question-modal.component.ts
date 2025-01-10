import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
	Securityquestion,
	SecurityQuestionModalData,
	UpdateSecurityQuestionModel,
} from '../../interfaces/security-question.interface';
import { SecurityQuestionService } from '../../services/security-question.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
	selector: 'app-security-question-modal',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatButtonModule,
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
		MatSelectModule,
		MatDialogClose,
		MatButtonModule,
	],
	templateUrl: './security-question-modal.component.html',
	styleUrl: './security-question-modal.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityQuestionModalComponent {
	private readonly dialogRef = inject(MatDialogRef<SecurityQuestionModalComponent>);
	private readonly fb = inject(FormBuilder);
	private readonly securityQuestionService = inject(SecurityQuestionService);
	public readonly data = inject<SecurityQuestionModalData>(MAT_DIALOG_DATA);

	form = this.fb.group({
		question1: ['', [Validators.required]],
		answer1: ['', [Validators.required]],
		question2: ['', [Validators.required]],
		answer2: ['', [Validators.required]],
		question3: ['', [Validators.required]],
		answer3: ['', [Validators.required]],
	});

	securityQuestionList = signal<Securityquestion[]>([]);
	step = signal<number>(1);

	constructor() {
		this.getSecurityQuestions();
	}

	async getSecurityQuestions() {
		const response = await this.securityQuestionService.getSecurityQuestionList();
		console.log(response);

		this.securityQuestionList.set(response);
	}

	async onButtonClick() {
		if (this.step() === 3) {
			const userId = localStorage.getItem('userId') ?? '';
			const updateQuestions: UpdateSecurityQuestionModel[] = [
				{
					userId: Number(userId),
					answer: this.form.controls.answer1.value ?? '',
					questionId: Number(this.form.controls.question1.value),
				},
				{
					userId: Number(userId),
					answer: this.form.controls.answer2.value ?? '',
					questionId: Number(this.form.controls.question2.value),
				},
				{
					userId: Number(userId),
					answer: this.form.controls.answer3.value ?? '',
					questionId: Number(this.form.controls.question3.value),
				},
			];

			await this.securityQuestionService.setSecurityQuestions(updateQuestions);

			this.dialogRef.close();

			return;
		}

		const questionControl = `question${this.step()}`;
		const answerControl = `answer${this.step()}`;

		const isQuestionValid = this.form.get(questionControl)?.valid ?? false;
		const isAnswerValid = this.form.get(answerControl)?.valid ?? false;

		if (!isQuestionValid || !isAnswerValid) return;

		const controlValue = this.form.get(questionControl)?.value ?? '';

		this.securityQuestionList.update((prev) => prev.filter((question) => question.questionId !== controlValue));

		this.step.update((prev) => prev + 1);
	}
}
