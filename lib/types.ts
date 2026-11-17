export type FamilyRole = 'Parent' | 'Child' | 'Caregiver' | 'Other';
export type Member = { id: string; name: string; role: FamilyRole };
export type AssignmentMode = 'any' | 'all' | 'specific';
export type Task = { id: string; title: string; assigneeIds: string[]; mode: AssignmentMode; completedBy: string[]; dueDate: string | null; source: string; note: string };
export type Analysis = { title: string; language: string; explanation: string; originalSummary: string; warnings: string[]; tasks: { title: string; targetRoles: string[]; targetNames: string[]; mode: AssignmentMode; dueDate: string | null; note: string; sourceQuote: string }[]; appointments: { title: string; date: string | null; time: string | null; attendee: string; location: string }[] };
export const demoMembers: Member[] = [ {id:'mom',name:'Mom',role:'Parent'}, {id:'dad',name:'Dad',role:'Parent'}, {id:'maryam',name:'Maryam',role:'Child'}, {id:'sara',name:'Sara',role:'Child'} ];
export function taskIsDone(task: Task) { return task.mode === 'all' ? task.assigneeIds.length > 0 && task.assigneeIds.every(id => task.completedBy.includes(id)) : task.completedBy.length > 0; }
export function toggleTask(task: Task, memberId: string): Task { if (!task.assigneeIds.includes(memberId)) return task; if(task.mode === 'all') return {...task, completedBy:task.completedBy.includes(memberId)?task.completedBy.filter(id=>id!==memberId):[...task.completedBy,memberId]}; return {...task, completedBy:task.completedBy.length ? [] : [memberId]}; }
