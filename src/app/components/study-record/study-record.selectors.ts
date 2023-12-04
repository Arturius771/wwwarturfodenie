import { createSelector, createFeatureSelector } from '@ngrx/store';
import { StudyRecordState } from './study-record.reducer';

export const selectStudyRecordState =
  createFeatureSelector<StudyRecordState>('studyRecord');

export const selectStudyRecords = createSelector(
  selectStudyRecordState,
  (state) => state.studyRecords
);
