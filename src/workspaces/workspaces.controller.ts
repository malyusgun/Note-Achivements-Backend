import { Controller } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';

@Controller('workspace')
export class WorkspacesController {
  constructor(private workspacesService: WorkspacesService) {}
}
