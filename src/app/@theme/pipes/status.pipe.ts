import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status'
})

export class StatusPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 0:
                return '文件校验中';
            case 1:
                return '校验完成';
            case 2:
                return '文件上传中';
            case 3:
                return '上传成功！';
            case 4:
                return '秒传！';
            case 9:
                return '文件太大了！';
            case 7:
            default:
                return '上传失败！';
        }
    }
}
