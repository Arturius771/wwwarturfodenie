import { createReducer, on } from '@ngrx/store';
import * as StudyRecordActions from './study-record.actions';
import { Course } from '../../models/course';

export interface StudyRecordState {
  studyRecords: Course[];
}

export const initialState: StudyRecordState = {
  studyRecords: [],
};

export const studyRecordReducer = createReducer(
  initialState,
  on(StudyRecordActions.addStudyRecord, (state, { studyRecord }) => {
    console.log(studyRecord);
    return {
      ...state,
      studyRecords: [...state.studyRecords, studyRecord],
    };
  }),
  on(StudyRecordActions.removeStudyRecord, (state, { moduleId }) => {
    return {
      ...state,
      studyRecords: state.studyRecords.filter((course) =>
        course.modules.forEach((module) => module.code !== moduleId)
      ),
    };
  })
);
