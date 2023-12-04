import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course';

export const addStudyRecord = createAction(
  '[StudyRecord] Add Study Record',
  props<{ studyRecord: Course }>()
);

export const removeStudyRecord = createAction(
  '[StudyRecord] Remove Study Record',
  props<{ moduleId: string }>()
);
