import { Controller, Get } from '@nestjs/common';
import { DiskService } from '../disk/disk.service';
import { CpuService } from '../cpu/cpu.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}

  @Get('/')
  public run(): string {
    const computed = this.cpuService.compute(2, 4);
    const data = this.diskService.getData();
    return data + computed.toString();
  }
}
