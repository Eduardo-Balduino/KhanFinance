import { relations } from "drizzle-orm/relations";
import { challenges, challengeProgress, units, lessons, courses, userProgress, challengeOptions } from "./schema";

export const challengeProgressRelations = relations(challengeProgress, ({one}) => ({
	challenge: one(challenges, {
		fields: [challengeProgress.challengeId],
		references: [challenges.id]
	}),
}));

export const challengesRelations = relations(challenges, ({one, many}) => ({
	challengeProgresses: many(challengeProgress),
	lesson: one(lessons, {
		fields: [challenges.lessonId],
		references: [lessons.id]
	}),
	challengeOptions: many(challengeOptions),
}));

export const lessonsRelations = relations(lessons, ({one, many}) => ({
	unit: one(units, {
		fields: [lessons.unitId],
		references: [units.id]
	}),
	challenges: many(challenges),
}));

export const unitsRelations = relations(units, ({one, many}) => ({
	lessons: many(lessons),
	course: one(courses, {
		fields: [units.courseId],
		references: [courses.id]
	}),
}));

export const coursesRelations = relations(courses, ({many}) => ({
	units: many(units),
	userProgresses: many(userProgress),
}));

export const userProgressRelations = relations(userProgress, ({one}) => ({
	course: one(courses, {
		fields: [userProgress.activeCourseId],
		references: [courses.id]
	}),
}));

export const challengeOptionsRelations = relations(challengeOptions, ({one}) => ({
	challenge: one(challenges, {
		fields: [challengeOptions.challengeId],
		references: [challenges.id]
	}),
}));