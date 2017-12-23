/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { TimesheetTestModule } from '../../../test.module';
import { MeetingInvitationDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/meeting-invitation/meeting-invitation-delete-dialog.component';
import { MeetingInvitationService } from '../../../../../../main/webapp/app/entities/meeting-invitation/meeting-invitation.service';

describe('Component Tests', () => {

    describe('MeetingInvitation Management Delete Component', () => {
        let comp: MeetingInvitationDeleteDialogComponent;
        let fixture: ComponentFixture<MeetingInvitationDeleteDialogComponent>;
        let service: MeetingInvitationService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TimesheetTestModule],
                declarations: [MeetingInvitationDeleteDialogComponent],
                providers: [
                    MeetingInvitationService
                ]
            })
            .overrideTemplate(MeetingInvitationDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(MeetingInvitationDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(MeetingInvitationService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
