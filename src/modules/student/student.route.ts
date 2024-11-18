import { Router } from 'express';
import { getAllStudents } from './student.controller';
import { AuthGuard } from '../../guard/auth.guard';
import { RoleGuard } from '../../guard/role.guard';

const router = Router();

router.get('/', AuthGuard, RoleGuard('student'), getAllStudents);

export default router;
