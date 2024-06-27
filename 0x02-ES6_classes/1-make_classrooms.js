import ClassRoom from './0-classroom.js';

/**
 * Create 3 Classroom instances
 *
 * @returns - an array of three Classroom instances
 */
export default function initializeRooms() {
	return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
